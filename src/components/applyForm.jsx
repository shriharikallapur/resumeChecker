import React, { Component } from 'react';
import axios from 'axios'

class ApplyForm extends Component {
  state = {
    file: null
  }

  handlefile(e) {
    let file = e.target.files[0];
    this.setState({file: file})
  }

  handleUpload(e) {
    e.preventDefault();
    document.querySelector('.applyForm')
      .innerHTML = `<div class="bg-[#2e2e2e6b] w-screen h-screen absolute">
                      <img src="/progressIcon.gif" class='w-[10rem] relative top-[20rem] left-[47rem]' alt="" />
                    </div>`;
    
    function hider() {
      document.querySelector('.applyForm').style.display = "none";
      document.querySelector('.result')
        .innerHTML = `<p class='text-[#75da94] font-extrabold text-3xl animate-pulse text-center'>
                        Hi ${document.querySelector('.name').value}, thank you applying, your appliction in selected.
                      </p>`;
    }
    setTimeout(hider, 5000);

    let file = this.state.file;
    let formData = new FormData()
    let name = document.querySelector('.name').value;
    formData.append('file',file);
    formData.append('name', name);
    let fData = Object.fromEntries(formData.entries());

    axios({
      url: 'http://localhost:5000/upload',
      method: 'POST',
      headers: {
        authorization: 'your token'
      },
      data: fData
    }).then((res)=>{

    },(err)=>{

    })
  }

  render () {
    return (
      <div className='w-full h-screen'>
        <div className='applyForm'></div>
        <form className='flex justify-center w-full h-full' onSubmit={(e) => this.handleUpload(e)}>
          <div className='m-auto w-[40rem] border-2 p-3 rounded-lg'>
          <p className='text-5xl text-center mb-16 font-bold'>
            Apply here!
          </p>
            <label 
              htmlFor="" 
              className='text-xl font-bold my-5 grid'
            >
              Name:
              <input
                type='text'
                placeholder='Enter your name'
                className='name my-2 text-lg border-2 p-2 rounded-md focus-visible:outline-none'  
              />
            </label>
            <label 
              htmlFor="" 
              className='text-xl font-bold my-5 grid'
            >
              Email:
              <input 
                type='email'
                placeholder='Enter email address'
                className='my-2 text-lg border-2 p-2 rounded-md focus-visible:outline-none' 
              />
            </label>
            <label 
              htmlFor="" 
              className='text-xl font-bold my-5 grid'
            >
              Upload Resume:
              <input 
                type='file'
                onChange={(e) => this.handlefile(e)}
                placeholder='Upload your Resume'
                className='my-2 text-lg border-2 rounded-md file:border-none file:bg-[#416a9f] file:text-white file:rounded-md file:p-2'
              />
            </label>
            <input 
              type='submit'
              // onClick={(e) => this.handleUpload(e)}
              className='rounded-md bg-[#416a9f] py-2 px-10 text-white ml-[30rem] cursor-pointer' />
          </div>
        </form>

        <div className='result -mt-[10rem]'>

        </div>
      </div>
    )
  }
}

export default ApplyForm;