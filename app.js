const { argv } = require('process');
const yargs=require('yargs');
const fs=require('fs');  
const notes=require('./notes');
// console.log(process.argv);
// debugger


yargs.version('1.1.0');
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true, 
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption:true, 
            type:'string'
        }
    },
    handler(){
        notes.addNote(yargs.argv.title,yargs.argv.body);
        // console.log('My title:'+yargs.argv.title);
        // console.log('Body:'+yargs.argv.body);
    }
})
yargs.command({
    command:'remove',
    describe:'remove a  note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true, 
            type:'string'
        }
    },
    handler(argv){
        // console.log('remove a note');
        notes.removeNote(yargs.argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        // console.log('list a note');
        notes.listNote();
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        describe:'Note Title',
        demandOption:true, 
        type:'string'
    },
    handler(){
        notes.readNote(yargs.argv.title);
        // console.log('reading a note');
    }
})
yargs.parse();
// console.log(yargs.argv);