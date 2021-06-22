#!/usr/bin/env python
import rospy
from sensor_msgs.msg import LaserScan 
from geometry_msgs.msg import Twist 
def callback(data):

    threshold1 = 0.8 
    threshold2 = 0.8
    if data.ranges[0]>threshold1 and data.ranges[15]>threshold2 and data.ranges[345]>threshold2:
        travel.linear.x = 0.5 
        travel.angular.z = 0.0 
    else:
        travel.linear.x = 0.0 
        travel.angular.z = 0.5
        if data.ranges[0]>threshold1 and data.ranges[15]>threshold2 and data.ranges[345]>threshold2:
            travel.linear.x = 0.5
            travel.angular.z = 0.0
    pub.publish(travel) 

travel = Twist() 
rospy.init_node('obstacle_avoidance') 

pub = rospy.Publisher("/cmd_vel", Twist, queue_size=10) 
sub = rospy.Subscriber("/scan", LaserScan, callback) 

rospy.spin()