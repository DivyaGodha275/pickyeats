import  { useState } from "react";

export default function AdminDashboard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleAdd = () => {
    if (form.name && form.price && form.quantity) {
      const quantityNum = parseInt(form.quantity);
      const status = quantityNum === 0 ? "Out of Stock" : "Available";
      const newItem = {
        id: Date.now(),
        name: form.name,
        price: form.price,
        quantity: quantityNum,
        status,
        imageUrl: form.image ? URL.createObjectURL(form.image) : null,
      };
      setItems([...items, newItem]);
      setForm({ name: "", price: "", quantity: "", image: null });
    }
  };

  const handleEditClick = (item) => {
    setEditMode(true);
    setEditItem(item);
    setForm({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: null,
      imageUrl: item.imageUrl,
    });
  };

  const handleUpdate = () => {
    const updated = items.map((item) =>
      item.id === editItem.id
        ? {
            ...item,
            name: form.name,
            price: form.price,
            quantity: parseInt(form.quantity),
            imageUrl: form.image ? URL.createObjectURL(form.image) : form.imageUrl,
            status: parseInt(form.quantity) === 0 ? "Out of Stock" : "Available",
          }
        : item
    );
    setItems(updated);
    setForm({ name: "", price: "", quantity: "", image: null });
    setEditItem(null);
    setEditMode(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="font-bold mb-4 text-green-700 mt-4">Fruit Bowl Admin Panel</h2>

      {/* Add/Edit Form */}
      <div className="grid grid-cols-1 md:grid-cols-5 items-center mb-6">
        <input
          type="text"
          className="border border-dark p-2 me-4 rounded"
          placeholder="Fruit Bowl Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          className="border border-dark me-4 p-2 rounded"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
          className="border border-dark me-4 p-2 rounded"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        {editMode ? (
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-dark px-4 py-2 rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd} 
            className="bg-green-600 text-dark px-4 py-2 rounded"
          >
            Add Item
          </button>
        )}
      </div>

      {/* Image Preview */}
      {(form.image || form.imageUrl) && (
        <div className="mb-4">
          <p className="font-semibold">Image Preview:</p>
          <img
            src={form.image ? URL.createObjectURL(form.image) : form.imageUrl}
            alt="Preview"
            className="h-28 rounded border"
          />
        </div>
      )}

      {/* Items Table */}
      <div className="d-flex justify-content-center">
        <table className="w-75 border mt-5">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-14 rounded"
                      style={{ width: "60px" }}
                    />
                  )}
                </td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">₹{item.price}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      item.status === "Available"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleEditClick(item)}
                    className="text-blue-600 underline"
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
