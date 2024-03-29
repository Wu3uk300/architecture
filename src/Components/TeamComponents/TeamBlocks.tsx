import React, { useState } from 'react'
import styles from './Styles/TeamBlocks.module.css'
import pic from './Images/teamMember.jpg'
import pic2 from './Images/teamMember2.jpg'
import { CSSTransition } from 'react-transition-group'

const TeamBlocks = () => {

    const team = [
        {
            image:pic,
            teamName:"Amanda Lee",
            teamJob:"Web Developer",
            id:'1'
        },
        {
            image:pic2,
            teamName:"Tony Soprano",
            teamJob:"Web Designer",
            id:'2'
        },
        {
            image:pic,
            teamName:"Amanda Lee",
            teamJob:"Web Developer",
            id:'3'
        },
        {
            image:pic2,
            teamName:"Tony Soprano",
            teamJob:"Web Designer",
            id:'4'
        },
        {
            image:pic,
            teamName:"Amanda Lee",
            teamJob:"Web Developer",
            id:'5'
        },
        {
            image:pic2,
            teamName:"Tony Soprano",
            teamJob:"Web Designer",
            id:'6'
        },

    ]

    const [whatMember, setWhatMember] = useState("")

    function handleAnimate(e:any){
            setWhatMember(`${e.target.id}`)

    }
    function handleNoAnimate(e:any){
            setWhatMember("")

    }
  return (
    <div className={styles.container}>
     <div className={styles.teamBlock}>


     {team.map((member)=>
       <div key={member.id} id={member.id} onMouseLeave={(e)=>handleNoAnimate(e)} onMouseEnter={(e)=>handleAnimate(e)} 
       style={{backgroundImage: `url(${member.image})`}} 
        className={whatMember===member.id?styles.teamMemberActive:styles.teamMember}>
         <CSSTransition in={whatMember===member.id?true:false} timeout={500} classNames="slideRight" unmountOnExit>
         <div className={styles.memberInfo}>
         <p className={styles.memberName}>{member.teamName}</p>
         <p className={styles.memberJob}>{member.teamJob}</p>
         </div>
        </CSSTransition>
       </div>
     )}

        


     

     </div>
    </div>
  )
}

export default TeamBlocks