import SectionTitle from '@/components/shared/SectionTitle';
import AskForm from '@/components/ask/AskForm';

export default function AskPage() {
  return (
    <div className="py-8">
      <SectionTitle 
        title="Ask Our Expert Barista"
        subtitle="Have a question about coffee brewing, beans, or techniques? Submit your question below, and our AI Barista will craft a personalized brewing guide for you!"
      />
      <div className="max-w-2xl mx-auto">
        <AskForm />
      </div>
    </div>
  );
}
