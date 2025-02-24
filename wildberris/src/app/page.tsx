import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-col mih-h-screen">
      <Header />
      <Container>
        <main className="flex-grow">
          <h1 className="text-4xl font-bold text-center">Welcome to Next.js!</h1>
        </main>
      </Container>
      <Footer />
    </div>
  );
}
