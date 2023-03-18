import {useSelector} from 'react-redux';
import Form1 from './Page/Form1';
const Home = () => {
  const getdata = useSelector((state: any) => state.formreducer);
  //   console.log(getdata, 'step');

  return (
    <>
      <Form1 />
      {/* {
                (() => {
                    if (step === 1) {
                       return <Form1 />
                    }else if(step === 2) {
                        return <Form2 />
                    }else if(step === 3) {
                       return <Form3 />
                    }
                    else if(step === 4) {
                        return <Form4 />
                     }

                })()
            } */}
    </>
  );
};

export default Home;
