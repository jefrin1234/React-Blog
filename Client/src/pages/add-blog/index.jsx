import React, { useContext, useEffect } from 'react'
import classes from './styles.module.css'
import { GlobalContext } from '../../context';
import axios from 'axios'
import { Navigate, useNavigate ,useLocation} from 'react-router-dom';

function AddNewBlog() {
  const { formData, setFormData,isEdit,setIsEdit } = useContext(GlobalContext)
  const Navigate = useNavigate()
  console.log(formData)
  const location = useLocation()


  async function handleSaveBlogToDataBase() {
   
      const response = isEdit ? await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,{
        title : formData.title,
        description : formData.description

      }) : await axios.post('http://localhost:5000/api/blogs/add',{
        title : formData.title,
        description : formData.description
      })
      const result = await response.data
      console.log(result);
      if(result){
        setIsEdit(false)
        setFormData({
          title : '',
          description : ''
        })
        Navigate('/')
      }

 }


 useEffect( ()=>{
  console.log(location)
  if(location.state){
    const { getCurrentBlogItem} =
    location.state
    setIsEdit(true)
    setFormData({
      title : getCurrentBlogItem.title,
      description : getCurrentBlogItem.description
    })
  }
 },[location] )

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? 'Edit A Blog' : 'Add A Blog'}</h1>
      <div className={classes.formWrapper}>


        <input name='title' placeholder='enter blog title' id='title' type='text' value={formData.title}
          onChange={(e) => setFormData({
            ...formData,
            title: e.target.value
          })}
        ></input>
        <textarea name="description" id="description " placeholder='enter blog description ' value={formData.description}
          onChange={(e) => setFormData({
            ...formData,
            description: e.target.value
          })}
        />
        <button onClick={handleSaveBlogToDataBase}>{
          isEdit ? 'Edit A Blog' : 'Add A Blog' }
        </button>


      </div>
    </div>
  )
}

export default AddNewBlog



