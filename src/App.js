import paintings from './paintings';
import PaintingList from './components/PaintingList';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
