import SubscribeForm from '../components/SubscribeForm';
import '../styles/globals.css';

export default function Home() {
  return (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-40 bg-black text-white dark:bg-black dark:text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The Platform for Rapid Progress
        </h2>
        <p className="mt-4 mx-auto max-w-[600px] text-lg md:text-xl lg:text-lg xl:text-xl">
          Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in
          testing, and integrated collaboration.
        </p>
        <SubscribeForm />
      </div>
    </section>
  );
}
