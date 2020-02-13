# ngrx-entity-crud library
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

# How to use it?
To use the library, read this [guide](https://www.npmjs.com/package/ngrx-entity-crud).

# DEVELOP
Below you will find some notes on how to modify the source code.

## compile the library: 
```
npm run build
```

## publish library:  
go to the "libs/ngrx-entity-crud" folder. 
```
npm login (authentication)
npm publish 
```

## Package linking:
```
cd <library-compiled>
npm link
```
go to the main folder of the project where to use the library:
```
npm link <library-name>
```

##  in case ...
if the error appears:  

```
... 'No provider for Injector!' ...
```
edit the file angular.json, set the value of "projects/*/architect/build/options":  
"preserveSymlinks": true. 

if you don't see changes to the library under development:  
temporarily remove the library reference from the "package.json" file and rerun "npm link <library-name>". 


