import React from 'react';

const Friends = ({users,inviteList,setInviteList}) => {

    // 유저목록 클릭 핸들러
    const onClickUserName = (user,e) => {
        // console.log(e.target)
        // console.log(user)
        // setInviteList(Object.assign({}, inviteList, user));
        setInviteList([...inviteList, user])
        
        console.log(inviteList)
    }

    return (
        <>
            <h3>사람목록</h3><br/>
            {users.list && users.list.map((user)=>
                <td 
                    onClick={(e) => onClickUserName(user,e)}
                    style = {{cursor:'pointer'}}
                >{user.name}</td>
            )}
            <br/>
        </>
    );
};

export default Friends;