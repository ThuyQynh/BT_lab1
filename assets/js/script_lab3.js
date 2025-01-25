document.addEventListener('DOMContentLoaded', () => {
    const subjectList = document.getElementById('subjectList');
    const subjectContent = document.getElementById('subjectContent');
    const subjectTitle = document.getElementById('subjectTitle');
    const materialList = document.getElementById('materialList');
    const backButton = document.getElementById('backButton');
    const shareButton = document.getElementById('shareButton');
    const shareModal = document.getElementById('shareModal');
    const shareForm = document.getElementById('shareForm');
    const cancelShare = document.getElementById('cancelShare');
    const searchInput = document.getElementById('searchInput');

    const subjects = {
        'giao-tiep-nguoi-may': {
            name: 'Giao tiếp người máy',
            materials: [
                { name: 'Week 1 - Introduction', author: 'ThS. Trần Thị Thanh Nga', type: 'bai-giang', size: '3.0 MB', file: 'assets/img/portfolio/pdf/Week 1 - Introduction (2).pdf' },
                { name: 'Week 2 - Web UI Design - Introduction', author: 'ThS. Trần Thị Thanh Nga', type: 'bai-giang', size: '3.5 MB', file: 'assets/img/portfolio/pdf/Week 2 - Web UI design - introduction (1).pdf' },
                { name: 'Week 3 - Understanding your user and their needs', author: 'ThS. Trần Thị Thanh Nga', type: 'bai-giang', size: '2.6 MB', file: 'assets/img/portfolio/pdf/Week 3 - Understanding your user and their needs.pdf' },
                { name: 'Week 4-5 - Understanding Visual Hierarchy & UI Patterns', author: 'ThS. Trần Thị Thanh Nga', type: 'bai-giang', size: '4.5 MB', file: 'assets/img/portfolio/pdf/Week 4-5 - Understanding Visual Hierarchy & UI Patterns (1).pdf' },
                { name: 'Week 6-7 - Understanding Web UI Elements & Principles', author: 'ThS. Trần Thị Thanh Nga', type: 'bai-giang', size: '6.2 MB', file: 'assets/img/portfolio/pdf/Week 6-7 - Understanding Web UI Elements & Principles (1).pdf' }
            ]
        },
        'toan-roi-rac': {
            name: 'Toán rời rạc',
            materials: [
                { name: '1.1 Cơ sở Logic - Logic mệnh đề', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '919.04 KB', file: 'assets/img/portfolio/pdf/1.1_Co_so_Logic_-_Logic_menh_de.pdf' },
                { name: '1.2 Cơ sở Logic - Logic vị từ', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '1.59 MB', file: 'assets/img/portfolio/pdf/1.2 Co so Logic - Logic vi tu_HK1_2024-2025.pdf' },
                { name: '1.3 Cơ sở Logic - Logic suy luận logic', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '1.02 MB', file: 'assets/img/portfolio/pdf/1.3 Co so Logic - Suy luan logic_HK1_2024-2025.pdf' },
                { name: '2.1 Cơ sở phép đếm - Phương pháp đếm nâng cao', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '880.93 KB', file: 'assets/img/portfolio/pdf/2.1 Co so phep dem - Ly thuyet tap hop va anh xa.pdf' },
                { name: 'Kenneth Rosen - Discrete Mathematics and Its Applications - 8th edition', type: 'tai-lieu-tham-khao', size: '36.21 MB', file: 'assets/img/portfolio/pdf/Kenneth Rosen - Discrete Mathematics and Its Applications - 8th edition.pdf' }
            ]
        },
        'cau-truc-du-lieu': {
            name: 'Cấu trúc dữ liệu',
            materials: [
                { name: 'RECURSIVE', author: 'ThS. Trần Lê Như Quỳnh', type: 'bai-giang', size: '1.7 MB', file: 'assets/pdf/2_RECURSIVE.pdf' },
                { name: '3_ALGORITHMS_1', author: 'ThS. Trần Lê Như Quỳnh', type: 'bai-giang', size: '864 KB', file: 'assets/img/portfolio/pdf/1.2 Co so Logic - Logic vi tu_HK1_2024-2025.pdf' },
                { name: '1.3 Cơ sở Logic - Logic suy luận logic', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '1.02 MB', file: 'assets/img/portfolio/pdf/3_ALGORITHMS_1.pdf' },
                { name: '3_ALGORITHMS_2', author: 'ThS. Trần Lê Như Quỳnh', type: 'bai-giang', size: '1.3 MB', file: 'assets/img/portfolio/pdf/1.2 Co so Logic - Logic vi tu_HK1_2024-2025.pdf' },
                { name: '1.3 Cơ sở Logic - Logic suy luận logic', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '1.02 MB', file: 'assets/img/portfolio/pdf/3_ALGORITHMS_2.pdf' },
                { name: '3_ALGORITHMS_3', author: 'ThS. Trần Lê Như Quỳnh', type: 'bai-giang', size: '1.1 MB', file: 'assets/img/portfolio/pdf/1.2 Co so Logic - Logic vi tu_HK1_2024-2025.pdf' },
                { name: '1.3 Cơ sở Logic - Logic suy luận logic', author: 'TS. Nguyễn Thị Phương Trâm', type: 'bai-giang', size: '1.02 MB', file: 'assets/img/portfolio/pdf/3_ALGORITHMS_3.pdf' },
                { name: 'Đệ quy bài tập mở rộng', author: 'ThS. Trần Lê Như Quỳnh', type: 'bai-tap', size: '146 KB', file: 'assets/img/portfolio/pdf/ĐỆ QUY BÀI TẬP MỞ RỘNG.pdf' },
                { name: 'Data Structures and Algorithms in Java - 6th Edition', author: 'Michael T. Goodrich, Roberto Tamassi, Michael H. Goldwasser', type: 'tai-lieu-tham-khao', size: '10.177 KB', file: 'assets/img/portfolio/pdf/__Data Structures and Algorithms in Java6th Edition (1).pdf' }
            ]
        }
    };
//Hiển thị nội dung môn học
    function showSubjectContent(subject) {
        subjectList.classList.add('hidden');
        subjectContent.classList.remove('hidden');
        subjectTitle.textContent = subjects[subject].name;
        renderMaterials(subjects[subject].materials);
    }
//Tạo danh sách tài liệu
    function renderMaterials(materials) {
        materialList.innerHTML = '';
        materials.forEach(material => {
            const card = document.createElement('div');
            card.className = 'material-card';
            card.innerHTML = `
                <h4>${material.name}</h4>
                <p>Tác giả: ${material.author}</p> <!-- Hiển thị tác giả -->
                <p>Loại: ${getTypeLabel(material.type)}</p>
                <p>Kích thước: ${material.size}</p>
                <a href="${material.file}" class="btn download-btn" download><i class="fas fa-download"></i> Tải xuống</a>
                <button class="btn preview-btn" onclick="previewMaterial('${material.file}')"><i class="fas fa-eye"></i> Xem trước</button>
            `;
            materialList.appendChild(card);
        });
    }
//Gắn nhãn loại tài liệu
    function getTypeLabel(type) {
        switch (type) {
            case 'bai-giang': return 'Bài giảng';
            case 'bai-tap': return 'Bài tập';
            case 'tai-lieu-tham-khao': return 'Tài liệu tham khảo';
            default: return 'Khác';
        }
    }

    // Hàm xem trước tài liệu
    window.previewMaterial = function(file) {
        const previewWindow = window.open(file, '_blank');
        previewWindow.focus();
    };

    // Gắn sự kiện click cho các card môn học
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', () => {
            showSubjectContent(card.dataset.subject);
        });
    });
//Quay lại danh sách môn học
    backButton.addEventListener('click', () => {
        subjectContent.classList.add('hidden');
        subjectList.classList.remove('hidden');
    });
//Chia sẻ tài liệu
    shareButton.addEventListener('click', () => {
        shareModal.classList.remove('hidden');
    });
//Hủy chia sẻ
    cancelShare.addEventListener('click', () => {
        shareModal.classList.add('hidden');
    });
//Xác nhận chia sẻ
    shareForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tài liệu đã được tải lên thành công!');
        shareModal.classList.add('hidden');
    });
    
});