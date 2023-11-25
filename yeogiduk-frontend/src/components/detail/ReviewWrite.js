import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useSearchParams} from 'react-router-dom';
import styled from 'styled-components';
//import {postReview, postImage} from '../../modules/review';
import {postReview} from '../../modules/review';

const ReviewBlock = styled.div`
margin-right:1rem;
`;

const Title = styled.div`
  font-weight:bold;
  font-size: 20px;
  margin-bottom:1rem;
`;

const Form = styled.form``;

const StarTitle = styled.div`
  font-weight:bold;
  font-size: 20px;
  margin-bottom:1rem;
  text-align:center;
`;

const Star = styled.div`
  color: #f87f9c;
  display:flex;
  font-size: 20px;
`;

const StarBlank = styled.div`
  color: #000000;
  display:flex;
  font-size: 20px;
`;

const StarInput = styled.input`

`;

const ContentInput = styled.input`
  padding: 0.5rem;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 100%;

  /* 추가된 부분 */
  &::placeholder {
    color: #aaa;
  }
  margin-top:1rem;
  margin-bottom:1rem;

`;

const ImageInput = styled.input``;

const Button = styled.button`
  background-color:transparent;
  color: #f87f9c;
  border: 0;
  float:right;
`;

const ErrorMessage = styled.div``;

const ReviewWrite = ({rstId}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    star: "",
    content: "",
  });
  const {review, student} = useSelector(({review, auth}) => ({
    review: review.review,
    student: auth.student,
  }));
  const viewId = null;
  const email = student.email;
  const date = null;

  const [values, setValues] = useState({
    star: 0,
    content: "",
  });
  const [files, setFiles] = useState([]);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    var f = [];
    for(var i = 0; i<e.target.files?.length; i++) {
      f[i] = e.target.files[i];
    }
    setFiles(f);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if(Object.values(errors).some(v => v)) {
      return
    }
    const {star, content} = values;
    const formData = new FormData();
    for(var i = 0; i < files?.length; i++) {
      formData.append('originfile', files[i]);
    }/*
    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      }
    }*/
    console.log(files);
    dispatch(postReview({viewId, rstId, email, content, date, star, files}));
    setValues({
      star: 0,
      content: "",
    });
  }

  const validate = () => {
    const errors = {
      star: "",
      content: "",
    };
    if(!values.star) {
      errors.star = "별점을 선택하세요";
    }
    if(!values.content) {
      errors.content = "내용을 입력하세요";
    }
    return errors;
  }

  return (
    <ReviewBlock>
      <Title>리뷰 쓰기</Title>
      <Form className="review" onSubmit={handleSubmit} encType="multipart/form-data">
        <StarTitle>이 식당은 덕우에게 얼마나 만족스러웠어?</StarTitle>
        <Star>
          <StarInput type="radio" name="star" value="5" onChange={handleChange} />★★★★★&nbsp;&nbsp;&nbsp;&nbsp;
          <StarInput type="radio" name="star" value="4" onChange={handleChange} />★★★★<StarBlank>☆&nbsp;&nbsp;&nbsp;&nbsp;</StarBlank>
          <StarInput type="radio" name="star" value="3" onChange={handleChange} />★★★<StarBlank>☆☆&nbsp;&nbsp;&nbsp;&nbsp;</StarBlank>
          <StarInput type="radio" name="star" value="2" onChange={handleChange} />★★<StarBlank>☆☆☆&nbsp;&nbsp;&nbsp;&nbsp;</StarBlank>
          <StarInput type="radio" name="star" value="1" onChange={handleChange} />★<StarBlank>☆☆☆☆&nbsp;&nbsp;&nbsp;&nbsp;</StarBlank>
        </Star>
        {errors.star && <ErrorMessage>{errors.star}</ErrorMessage>}
        <ContentInput type="text" name="content" value={values.content} onChange={handleChange} placeholder="식당에 대한 리부를 남겨주세요!" />
        <Button type="submit">리뷰 등록</Button>
        <ImageInput type="file" accept='image/*' multiple="multiple" name="imageFiles" onChange={handleChange} />
        {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
      </Form>
    </ReviewBlock>
  );
}

export default ReviewWrite;