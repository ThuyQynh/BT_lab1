 // Xử lý click cho các category pills
 const categoryPills = document.querySelectorAll('.category-pill');
        
 categoryPills.forEach(pill => {
     pill.addEventListener('click', () => {
         // Xóa active class từ tất cả pills
         categoryPills.forEach(p => p.classList.remove('active'));
         // Thêm active class cho pill được click
         pill.classList.add('active');
     });
 });