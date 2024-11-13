import React from 'react'

function ProfileImage({src,height,width,style}) {
  return (
    <div>
        <img src={src} height={height} width={width} style={style} alt="" />
    </div>
  )
}

export default ProfileImage