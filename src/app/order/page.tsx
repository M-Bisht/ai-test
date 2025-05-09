import SectionTitle from '@/components/shared/SectionTitle';
import OrderForm from '@/components/order/OrderForm';
import { MENU_ITEMS } from '@/lib/constants';

export default function OrderPage() {
  return (
    <div className="py-8">
      <SectionTitle 
        title="Order Your Favorites"
        subtitle="Enjoy CoffeeZilla at home. Fill out the form below to place your order for pickup or delivery."
      />
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-xl">
        <OrderForm menuItems={MENU_ITEMS} />
      </div>
    </div>
  );
}
