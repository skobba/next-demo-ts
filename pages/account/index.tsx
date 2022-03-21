import { ReactElement } from 'react';
import Layout from '../../components/layout';
import Sidebar from '../../components/sidebar';

export const Account = () => (
  <section>
    <h2>Account</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium
      lacus et eros lobortis condimentum. Sed ut nisl id massa mattis sodales
      porttitor sit amet orci. Ut aliquet suscipit leo, eget auctor elit varius
      ac. Nam vestibulum commodo tortor et hendrerit. Aliquam erat volutpat.
      Fusce vulputate leo iaculis ligula vestibulum, et scelerisque lectus
      consequat. Nullam placerat finibus convallis. Mauris nisi enim, vulputate
      in tincidunt luctus, dignissim at enim. Maecenas non ex quis urna tempus
      laoreet.
    </p>
  </section>
);

const getLayout = (page: ReactElement) => (
  <Layout>
    <Sidebar />
    {page}
  </Layout>
);

Account.getLayout = getLayout;

export default Account;
