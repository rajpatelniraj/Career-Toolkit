import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryItem({name, id}) {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <Link
        className="cat-item rounded p-4"
        to={`/filterlistcat/${id}/${name}`}
      >
        <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
        <h6 className="mb-3">{name}</h6>
        <p className="mb-0">Vacant-jobs</p>
      </Link>
    </div>
  );
}
