const fs=require('fs');
const chalk=require('chalk')

const getNotes=()=>'My note';
 
const addNote=(title,body)=>{
    const notes=loadNotes();
    // const dup_notes=notes.filter((note)=>note.title===title)
    const dup_notes=notes.find(note=> note.title===title)
    if(!dup_notes){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(notes);
    }else{
        console.log('Already existing');
    }  
}
const removeNote=(title)=>{
    const notes=loadNotes();
    const keep_notes=notes.filter(note=> note.title!==title)
    if(keep_notes.length!==notes.length){
        console.log(chalk.green.inverse('Note exists'));
        saveNotes(keep_notes);
        
    }else{
        console.log(chalk.red('Note does not exist'));
    }
}
const listNote=()=>{
    console.log(chalk.blue('Your Notes'));
    const notes=loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}
const readNote=(title)=>{
    const notes=loadNotes();
    const f=notes.find(note=> note.title===title);
    if(f){
        console.log(chalk.yellow(f.title));
        console.log(f.body);
    }else{
        console.log(chalk.red('Not found'));
    }
}
const saveNotes=(notes)=>{
    const data=JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);
}
const loadNotes=()=>{
    try{
    const buffer=fs.readFileSync('notes.json');
    const dataJson=buffer.toString();
    return JSON.parse(dataJson);
    }catch(e){
        return [];
    }
}
module.exports={getNotes,addNote,removeNote,listNote,readNote};