import { createClient } from "@supabase/supabase-js"
import { message } from "antd"
import dayjs from "dayjs"

const Header={
  'Content-Type': 'application/json',
  'x-hasura-admin-secret': 'knTQIEIkzS2D6GIKRND6m3EqGu8yQDN9DQfPNbFg6F28jIUMUu1lAnlCVmNK3gFQ',
}

const supabaseUrl="https://dggcdkxmgfnrpbdxchul.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZ2Nka3htZ2ZucnBiZHhjaHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MzY3NjAsImV4cCI6MjAxNjMxMjc2MH0.gTf2gpwPBGwuqkhMPX0OHxX8kIjgzKvV_pzWoNxrjHM"

const supabase=createClient(supabaseUrl, supabaseKey)

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

export const handleFileUpload = async (file: File) => {
  try {
    const { data, error } = await supabase.storage
      .from('test')
      .upload(file.name, file);

    if (error) {
      throw new Error('Error uploading file');
    }

    if (data) {
      const fileUrl = `${supabaseUrl}/storage/v1/object/public/uploads/${file.name}`;
      message.success('File uploaded successfully');
      return fileUrl;
    }
  } catch (error) {
    console.error(error);
    message.error('Failed to upload file');
    throw error;
  }
}