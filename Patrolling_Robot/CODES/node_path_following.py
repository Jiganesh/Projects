#!/usr/bin/env python
import rospy
from nav_msgs.msg import Odometry
from tf.transformations import euler_from_quaternion
from geometry_msgs.msg import Point, Twist
from math import atan2
from angles import shortest_angular_distance
import math

x = 0.0
y = 0.0 
theta = 0.0

path = [(2, 2), (-1, 2), (-1, -1), (2, -1)]

def newOdom(msg):
    global x
    global y
    global theta

    x = msg.pose.pose.position.x
    y = msg.pose.pose.position.y

    rot_q = msg.pose.pose.orientation
    (roll, pitch, theta) = euler_from_quaternion([rot_q.x, rot_q.y, rot_q.z, rot_q.w])

rospy.init_node("speed_controller")

sub = rospy.Subscriber("/odom", Odometry, newOdom)
pub = rospy.Publisher("/cmd_vel", Twist, queue_size = 1)

speed = Twist()

r = rospy.Rate(100)

goal = Point()
goal.x = path[0][0]
goal.y = path[0][1]

def shortest_distance(x1,y1,x2,y2):
    dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return dist 
i = 0 
while not rospy.is_shutdown():
    inc_x = goal.x -x
    inc_y = goal.y -y
    angle_to_goal = atan2(inc_y, inc_x)
    angular_distance = shortest_angular_distance(theta, angle_to_goal)
    sign = angular_distance/abs(angular_distance)
    if abs(angular_distance) > 0.1:
        speed.linear.x = 0.0
        if angular_distance > 0.5:
          speed.angular.z = sign
        else :
          speed.angular.z = sign*max(abs(0.3*sign),abs(angular_distance))
    else:
        speed.linear.x = 0.5
        speed.angular.z = 0.0

    short_distance = shortest_distance(x,y,goal.x,goal.y)
    short_distance = round(short_distance,2)

    if short_distance < 0.05:
        speed.linear.x = 0.0
        speed.angular.z = 0.0
        i +=1 
        if i>3: i = 0

        goal.x = path[i][0]
        goal.y = path[i][1]
        
    print(angular_distance)
    pub.publish(speed)
    r.sleep()   
