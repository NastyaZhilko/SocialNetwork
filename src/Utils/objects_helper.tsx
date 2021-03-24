import {UsersType} from "../Redux/users_reducer";
type newObjPropsType = {
    followed: boolean
}
export let updateObjectInArray = (users:Array<UsersType>,
                                  itemId:number,
                                  objectPropName: keyof UsersType,
                                  newObjectProps: newObjPropsType) =>{
   return users.map(u => {
        if (u[objectPropName] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u
    })
}