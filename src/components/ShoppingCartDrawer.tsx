
import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Plus, Minus, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ShoppingCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
  totalPrice: number;
}

const ShoppingCartDrawer = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity,
  totalPrice 
}: ShoppingCartDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="max-h-[80vh] overflow-auto">
        <DrawerHeader className="border-b pb-4">
          <DrawerTitle className="text-2xl font-bold text-robot-blue flex items-center justify-between">
            Carrinho de Compras
            <DrawerClose onClick={onClose} className="rounded-full hover:bg-gray-100 p-1">
              <X className="h-5 w-5" />
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>

        {cart.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {cart.map(item => (
                <div key={item.id} className="flex items-center py-4 px-6">
                  <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-bold text-xs">ROBOT</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-robot-blue font-bold">R${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center border rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, 'decrease')}
                      className="p-1 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 'increase')}
                      className="p-1 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <DrawerFooter className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-robot-blue text-xl">R${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-robot-blue hover:bg-blue-800">
                Finalizar Compra
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
