import React from 'react'
import Sidebar from '../../common/sidebar/Sidebar'

const AddVolumeBucket = () => {
  return (
   <>
   <div>
    <Sidebar/>
      <h2>Login Form</h2>
     
      <form action="/action_page.php" method="post">
       

        <div class="container">
          <label for="uname"><b>Bucket A:</b></label>
          <input type="text" placeholder="Cubic inches" name="bucketA" required />
          <label for="uname"><b>Bucket B:</b></label>
          <input type="text" placeholder="Cubic inches" name="bucketB" required />
          <label for="uname"><b>Bucket C:</b></label>
          <input type="text" placeholder="Cubic inches" name="bucketC" required />
          <label for="uname"><b>Bucket D:</b></label>
          <input type="text" placeholder="Cubic inches" name="bucketD" required />
          <label for="uname"><b>Bucket E:</b></label>
          <input type="text" placeholder="Cubic inches" name="bucketE" required />
          <button type="submit">Create Bucket Volume</button>
        </div>
       
      
      </form>

      
    </div>
   </>
  )
}

export default AddVolumeBucket