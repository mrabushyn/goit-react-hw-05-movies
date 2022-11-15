import { BsSearch } from 'react-icons/bs';
import {  Input, Button } from './SearchBox.styled';


export const InputBox = onChange => {

  // const inputChange = evt => {
  //   console.log(evt.target.value); 
  //   // onChanges(evt => evt.target.value);
  // }


  return (
    <form
    // onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="text"
        placeholder="Search movie"
        onChange={onChange}
      />
      {
        <Button type="submit">
          <BsSearch />
        </Button>
      }
    </form>
  );
};
