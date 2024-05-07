import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/Dashboard.css';

const Dashboard = () => {
  // return (
  //   <div className='card'>
  //     <h4 className='card-header'>Admin Links</h4>
  //     <ul className='list-group'>
  //       <li className='list-group-item'>
  //         <Link className='nav-link' to='/admin/categories'>
  //           <i className="bi bi-list-ul"></i> Category List
  //         </Link>
  //       </li>
  //       <li className='list-group-item'>
  //         <Link className='nav-link' to='/create/category'>
  //           <i className="bi bi-plus-circle"></i> Add Category
  //         </Link>
  //       </li>
  //       <li className='list-group-item'>
  //         <Link className='nav-link' to='/create/product'>
  //           <i className="bi bi-plus-circle"></i> Add Product
  //         </Link>
  //       </li>
  //       <li className='list-group-item'>
  //         <Link className='nav-link' to='/admin/orders'>
  //           <i className="bi bi-journal-check"></i> View Orders
  //         </Link>
  //       </li>
  //       <li className='list-group-item'>
  //         <Link className='nav-link' to='/admin/products'>
  //           <i className="bi bi-gear"></i> Manage Products
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // );
  return (
    <div className="seller-dashboard">
      <div className="sidebar">
        <h2>Action</h2>
        <ul>
          <li><a href="#create-category">Create Category</a></li>
          <li><a href="#manage-products">Manage Listing</a></li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/admin/orders'>
              <i className="bi bi-journal-check"></i> View Orders
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-content">

        <Card title="Create Category" >
          {/* Form for creating a new category */}
        </Card>
        <Card title="Manage Products" >
          {/* Table or list of products with options to edit, update, and delete */}
        </Card>
        <Card title="View Orders" >
          {/* Table or list of ordered products with order details */}
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;