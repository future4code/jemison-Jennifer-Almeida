export type recipe = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}

export enum USERS_TYPE{

   TEACHER = "TEACHER",
   OPERATIONS = "OPERATIONS",
   CX = "CX",

}
export type users= {
   id: string
   name: string
   email: string
   type: string
   
}