const express = require('express');
const router = express.Router();


    router.get("/getOrganisationData",async(req,res)=>{
        $.ajax({
            url: "https://books.zoho.com/api/v3/organizations?organization_id=649249007",
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            headers:{
                Authorization :"db36e02a50b57e081efe533a8a0f834b"
            },
            complete: function() {
              //called when complete
              console.log('process complete');
            },
    
            success: function(data) {
              console.log(data);
              console.log('process sucess');
              res.send(data)
           },
    
            error: function() {
              console.log('process error');
            },
          });
        
    })

    module.exports = router;