import { createClient } from "@supabase/supabase-js"
import { message } from "antd"
import dayjs from "dayjs"

const Header={
  'Content-Type': 'application/json',
  'x-hasura-admin-secret': 'knTQIEIkzS2D6GIKRND6m3EqGu8yQDN9DQfPNbFg6F28jIUMUu1lAnlCVmNK3gFQ',
}



export const storeRegistrator= async (values: any)=>{
  console.log(values)
  try {
    const mutation=`
      mutation MyMutation($email: String!, $level: String!, $mat_no: String!, $name: String!, $number: String!, $transaction_id: String!) {
        insert_Registrations_one(object: {email: $email, level: $level, mat_no: $mat_no, name: $name, number: $number, transaction_id: $transaction_id}) {
          id
        }
      }
    `

    const variables={
      email: values.email,
      level: values.level,
      mat_no: values.matricule,
      name: values.name,
      number: values.number,
      transaction_id: values.transaction_id
    }

    const response= await fetch('https://new-toucan-94.hasura.app/v1/graphql',{
      method: 'POST',
      headers: Header,
      body: JSON.stringify({
        query: mutation,
        variables: variables
      })
    })

    const data= await response.json()

    return(["Success",data.data.insert_Registrations_one.id])

  } catch (e: any) {
    return ["Error", e]
  }
}
