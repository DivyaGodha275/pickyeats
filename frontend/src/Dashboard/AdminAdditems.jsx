import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

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

  const handleAdd = async () => {
    if (
      form.name &&
      form.price &&
      form.quantity &&
      form.image &&
      form.category
    ) {
      const formData = new FormData();

      formData.append("pname", form.name);
      formData.append("price", form.price);
      formData.append("quantity", form.quantity);
      formData.append("image", form.image);
      formData.append("category", form.category); // ✅ use actual value

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/pickyeats/products/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const newItem = {
          id: response.data.id,
          name: response.data.pname,
          price: response.data.price,
          quantity: response.data.quantity,
          status:
            parseInt(response.data.quantity) === 0
              ? "Out of Stock"
              : "Available",
          imageUrl: response.data.image,
        };

        setItems([...items, newItem]);
        setForm({
          name: "",
          price: "",
          quantity: "",
          image: null,
          category: "local",
        });
      } catch (error) {
        console.log("Error response data:", error.response?.data);
        console.error("Error adding item:", error);
        alert("Failed to add product. Please check your form data.");
      }
    } else {
      alert("Please fill all fields including category and image.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "/login";
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
            imageUrl: form.image
              ? URL.createObjectURL(form.image)
              : form.imageUrl,
            status:
              parseInt(form.quantity) === 0 ? "Out of Stock" : "Available",
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
      <button
        onClick={handleLogout}
        className="bg-red-500 d-flex justify-content-end px-4 py-2 rounded "
      >
        Logout
      </button>

      <h2 className="font-bold mb-4 text-green-700 mt-4">
        Fruit Bowl Admin Panel
      </h2>

      {/* Add/Edit Form */}
      <div className="d-flex ms-5 gap-4 mb-6 w-full max-w-md">
        <input
          type="text"
          className="border border-dark p-2 me-4 rounded"
          placeholder="Fruit Bowl Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Form.Group>
          <Form.Select
            style={{ width: "130px" }}
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="local">Local</option>
            <option value="imported">Imported</option>
            <option value="dry_fruits">Dry</option>
          </Form.Select>
        </Form.Group>
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
                    Update
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
