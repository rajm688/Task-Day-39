// initializing MongoDB Shell
mongo

// listing available databases
show dbs

//cereating new collection 
use taskDay39

//creating new document and adding data in it
db.Files.insertMany([{
    "mainFolder":{
        "Languages":{
            "FrontEnd":{
                "File1":"javascript.js",
                "File2":["CSS.css","SASS.sass","BootStrap.css"],
                "File3":"React"
            },
            "BackEnd":{
                "File1":"MongoDB.js",
                "File2":["AWS.txt","GoogleCloud.txt","Azure.txt"],
                "File3":"Node.js"
            },
        "Tools":{
            "File1":"VSCode.exe",
            "File2":["Git.exe","GitHub.com"]
        }
        }
    }
}])
//listed are the files and folder in a embedded format