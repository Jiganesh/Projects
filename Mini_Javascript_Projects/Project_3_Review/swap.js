content =[
    {id :1, 
    title : "Python",
    image : "Images/Python.png",
    description : "Python is a high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales. Python features a dynamic type system and automatic memory management. It supports multiple programming paradigms, including object-oriented, imperative, functional and procedural."
    },
    {id :2,
    title : "Java",
    image : "Images/JAVA.jpg",
    description: "Java is a general-purpose programming language. It is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers be productive with a high level of flexibility while maintaining the portability of the language across a wide variety of platforms and programming environments."
    },
    {id :3,
    title : "C++",
    image: "Images/C++.png",
    description: "C++ is a general-purpose programming language. It is an extension of the C programming language that supports structured programming, lexical variable scope and data types, and an object-oriented programming model. C++ was designed with an orientation toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights."
    },
    {id :4,
    title : "Javascript",
    image: "Images/Javascript.png",
    description: "Javascript is a high-level, general-purpose programming language. It is a prototype-based, prototype-based programming language that is not specific to web-related applications. It is a strict, dynamic, untyped language that has first-class functions, making it a functional programming language. It has an ECMAScript specification, which is a sub-set of the JavaScript language."
    },
    {id :5,
    title : "PHP",
    image: "Images/PHP.png",
    description: "PHP is a server-side scripting language designed for web development, but which can also be used as a general-purpose programming language. PHP was designed to be a simple, fast, and secure programming language that can be used to develop general-purpose dynamic web applications. PHP is the most popular scripting language on the Internet, used by approximately 80% of the top 1,000,000 websites as of August, 2014."
    }

]

let langLogo = document.querySelector("#image");
let langName = document.querySelector("#lang-name");
let langDesc = document.querySelector("#lang-description");

let nextBtn = document.querySelector("#right");
let prevBtn = document.querySelector("#left");

let randomBtn = document.querySelector("#random");


var currentIndex = 0;

window.addEventListener("load", function() {
    showContent();
})

function showContent(){
    contentItem = content[currentIndex];
    langLogo.src = contentItem.image;
    langName.textContent = contentItem.title;
    langDesc.textContent = contentItem.description;
}

nextBtn.addEventListener("click", function(){
    currentIndex++;
    if(currentIndex >= content.length){
        currentIndex = 0;
    }
    showContent();
})

prevBtn.addEventListener("click", function(){
    currentIndex--;
    if (currentIndex<0){
        currentIndex=content.length-1;
    }
    showContent();
})

randomBtn.addEventListener("click",function(){
    currentIndex = Math.floor(Math.random()*content.length);
    showContent();
})



