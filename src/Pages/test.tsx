import React from 'react'
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createClient } from '@supabase/supabase-js';
import { supabaseKey, supabaseUrl, uid } from '../data';


const supabase = createClient(supabaseUrl, supabaseKey);

const handleFileUpload = async (file: File) => {
  try {
    const { data, error } = await supabase.storage
      .from('test')
      .upload(uid + '/' + file.name, file);

    if (error) {
      throw new Error('Error uploading file');
    }

    if (data) {
      const { data, error } = await supabase.storage.from('test').list(uid + '/' + file.name, {
        limit: 1,
        offset: 0,
        sortBy: {
          column: 'name',
          order: 'asc'
        }
      })
      if (data) {
        message.success('File uploaded successfully');
        const file_link = ''
      }
    }
  } catch (error) {
    console.error(error);
    message.error('Failed to upload file');
  }
};



const Test = () => {
  const handleUpload = (info: any) => {
    if (info.file.status === 'done') {
      handleFileUpload(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
  };

  return (
    <Upload.Dragger
      name="file"
      action="https://supabase.com/dashboard/project/dggcdkxmgfnrpbdxchul/storage/buckets/uploads"
      onChange={(file) => { handleUpload(file) }}
    >
      <p className="ant-upload-drag-icon">
        <UploadOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Support for a single upload.</p>
    </Upload.Dragger>
  );
};

export default Test;

