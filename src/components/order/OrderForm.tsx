'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { MenuItem } from '@/types';
import { Send } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const orderFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  contact: z.string().min(5, { message: 'Please enter a valid contact number or email.' }),
  address: z.string().min(10, { message: 'Please enter a valid address for delivery.' }).optional(),
  selectedItem: z.string({ required_error: 'Please select a coffee.' }),
  quantity: z.coerce.number().min(1, { message: 'Quantity must be at least 1.' }).max(10, { message: 'Maximum 10 items per order.' }),
  specialInstructions: z.string().max(200, { message: 'Instructions cannot exceed 200 characters.' }).optional(),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

interface OrderFormProps {
  menuItems: MenuItem[];
}

export default function OrderForm({ menuItems }: OrderFormProps) {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const preselectedItemId = searchParams.get('item');

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: '',
      contact: '',
      address: '',
      selectedItem: preselectedItemId || '',
      quantity: 1,
      specialInstructions: '',
    },
  });

  useEffect(() => {
    if (preselectedItemId) {
      form.setValue('selectedItem', preselectedItemId);
    }
  }, [preselectedItemId, form]);

  function onSubmit(data: OrderFormValues) {
    console.log('Order submitted:', data);
    toast({
      title: 'Order Placed!',
      description: `Thank you, ${data.name}! Your order for ${data.quantity}x ${menuItems.find(item => item.id === data.selectedItem)?.name || 'item'} has been received.`,
      variant: 'default', // 'default' should use primary colors due to globals.css setup
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact (Phone or Email)</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com or (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Address (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="123 Coffee St, Brewville" {...field} />
              </FormControl>
              <FormDescription>Leave blank for pickup orders.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selectedItem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose Your Coffee</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a delicious coffee" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {menuItems.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name} - ${item.price.toFixed(2)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" placeholder="1" {...field} min="1" max="10" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="specialInstructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., extra shot, oat milk, no sugar..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Placing Order...' : <> <Send className="mr-2 h-5 w-5" /> Place Order </>}
        </Button>
      </form>
    </Form>
  );
}
