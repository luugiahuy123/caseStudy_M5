
export function Customer() {
    return (

        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Quản lý Khách hàng</h2>
            </div>
            <div className="row mx-5">
                <div className="col-2">
                    <a href="/customer/create" className="btn btn-primary">Thêm mới</a>

                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mx-5 mt-5 mb-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">CCCD</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Email</th>
                        <th scope="col">Loại</th>
                        <th scope="col">Địa chỉ</th>
                        <th>Chức năng</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    )
}