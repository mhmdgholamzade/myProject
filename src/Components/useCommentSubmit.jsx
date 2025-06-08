import { useState } from 'react';
import axiosInstance from './axiosInstance'; 

const useCommentSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitComment = async (commentData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post('/comments', commentData); 
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error Sending Comment...');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { submitComment, loading, error };
};

export default useCommentSubmit;
