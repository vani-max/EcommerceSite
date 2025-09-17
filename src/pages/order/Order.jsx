import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, orders } = context

  return (
    <Layout>
      {loading && <Loader />}
      {orders.length > 0 ? (
        <div className="h-full pt-10 container mx-auto px-4">
          {orders
            .filter(obj => obj.userid === userid)
            .map((order, orderIndex) => (
              <div
                key={orderIndex}
                className="mb-8 p-6 rounded-xl shadow-lg border border-gray-200"
                style={{
                  backgroundColor: mode === 'dark' ? '#1f2937' : 'white',
                  color: mode === 'dark' ? 'white' : 'black',
                }}
              >
                <h2 className="text-xl font-bold mb-4">Order #{orderIndex + 1}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {order.cartItems.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="rounded-lg shadow-md p-4"
                      style={{
                        backgroundColor: mode === 'dark' ? '#374151' : '#f9fafb',
                        color: mode === 'dark' ? 'white' : 'black',
                      }}
                    >
                      <img
                        src={item.imageUrl}
                        alt="product"
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm mb-2">{item.description}</p>
                      <p className="font-bold">₹{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl font-semibold text-gray-600 dark:text-white">
          No Order
        </h2>
      )}
    </Layout>
  )
}

export default Order
