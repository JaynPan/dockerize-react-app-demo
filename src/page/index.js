import Layout from '../layout';
import image from '../assets/xiaoshajun_square_image_cut_cat_thug_gangster_with_homie_dc8eb895-9dd1-4996-95ac-08d209f62a31.png';

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <img style={{width: '320px'}} src={image} alt="image" />
    </Layout>
  );
}
