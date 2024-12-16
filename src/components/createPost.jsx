import React from 'react'

export default function createPost() {
    const [title,setTitle]=useState('');
    const [description,setDescription]= useState('');
    const [content,setContent]= useState('');
    const [files,setFiles]= useState(null);
  return (
    <div>
       <form style={{marginTop:'70px'}} onSubmit={h}>
            <input type="text"
            placeholder={'Title'}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text"
            placeholder={'description'}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <input type="file" 
            onChange={(e)=>setFiles(e.target.files)}/>
            <Editor value={content} onChange={setContent}/>
            <button style={{marginTop:'25px'}}>Create post</button>
        </form>
    </div>
  )
}
