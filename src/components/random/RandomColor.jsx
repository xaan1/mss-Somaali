

import React, { useState } from 'react'

const RandomColor = () => {


    const [typecolor , setTypecolor] = useState("hex")

    const [color , setColor] = useState("#000")



    function randomgeneror(length){
        return Math.floor(Math.random() * length)

    }


    function createhex (){
        const hex = [1,2,3,4,5,5,6,6,6,"A" , "F", 'C']
        let hexcolor = "#"


        for(let i = 0  ; i < 6 ; i++ ){
            hexcolor +=hex[randomgeneror(hex.length)]

        }
        setColor(hexcolor)

    }

    function creatergba (){
    


        const a  = randomgeneror(200)
        const b  = randomgeneror(100)
        const c  = randomgeneror(300)
      
        setColor(` rgba ${a}, ${b},${c} `)

    }

  return (
    <div style={{
        height: "100vh",
        background:color,
        
        
    }}>

        <button onClick={() => setTypecolor("hex")}>Create hex Color</button>
        <button onClick={() => setTypecolor("rgba")}>Create Rgba Color</button>
       
        <button onClick={typecolor === "hex" ? createhex : creatergba}>RANDOM CoLOR</button>

        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typecolor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor