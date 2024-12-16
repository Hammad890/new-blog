

export default function EditPost(){
    const [title,setTitle]= useState('');
    const [content,setContent]=useState('');
    const [summary,setSummary]= useState('')
    const [files,setFiles]=useState('')
    
   

    const handleUpdate= async (e)=>{
    }
    
    return(
        <form onSubmit={handleUpdate}>
            <input type="title"
            value={title}
            placeholder={'Title'}
            onChange={e=>setTitle(e.target.value)}
            />
            <input type="summary"
            value={summary}
            placeholder={'Summary'}
            onChange={e=>setSummary(e.target.value)}
            />
             <input type="file"
             onChange={e => setFiles(e.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{marginTop:'5px'}}>Update post</button>
        </form>
    );
}