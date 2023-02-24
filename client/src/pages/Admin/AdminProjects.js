import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ShowLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";
import Item from "antd/es/list/Item";
function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type = "add", setType] = React.useState("add");
  const onFinish = async (values) => {
    try {
      const tempTechnologies = values?.technologies?.split(",");
      values.technologies = tempTechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {projects.map((project) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-secondary text-xl font-bold">
              {project.title}
            </h1>
            <hr />
            <img src={project.image} alt="" className="h-62 w-80" />
            <h1>Role:{project.title}</h1>
            <h1>{project.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-primary text-white px-5 py-2 "
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {
      (type === "add" || 
      selectedItemForEdit) && <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {setShowAddEditModal(false);
            setSelectedItemForEdit(null)}}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies?.join(" , "),
              } || {}
            }
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Image">
              <input placeholder="Image" />
            </Form.Item>
            <Form.Item name="description" label="description">
              <textarea placeholder="description" />
            </Form.Item>
            <Form.Item name="link" label="link">
              <input placeholder="Link" />
            </Form.Item>
            <Form.Item name="technologies" label="technologies">
              <input placeholder="technologies" />
            </Form.Item>

            <div classname="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      }
    </div>
  );
}

export default AdminProjects;
