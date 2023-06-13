import React from 'react'
import { List } from 'antd'
import { User } from './App'
import '../css.css'

interface IProps {
    users: User[];
    selectedUser: User;
    setSelectedUser: React.Dispatch<React.SetStateAction<User>>;
}
export function UserList(props: IProps) {

    const onSelectUser = ((user: User) => {
        props.setSelectedUser(user)
    })

    return (
        <div className='antd-list' >
            <List
                
                itemLayout='horizontal'
                dataSource={props.users}
                renderItem={(item,index) => (
                    <List.Item 
                        className='antd-list-item' 
                        onClick={() => onSelectUser(item)}
                        style={item.name===props.selectedUser.name ? {backgroundColor:'pink'} : {}}
                    >
                            <List.Item.Meta
                                title={item.name}
                                description={item.name}
                            />
                    </List.Item>
                )}
            />
        </div>
    )
}