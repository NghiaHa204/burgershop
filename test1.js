document.addEventListener("DOMContentLoaded", function () {
    const recipeBtn = document.querySelector(".recipe-btn"); // Nút Công thức
    const closeRecipeBtn = document.querySelector(".close-recipe"); // Nút đóng công thức
    const pageProductForm = document.getElementById("page_productForm"); // Form thêm sản phẩm
    const containerRecipe = document.getElementById("container-recipe"); // Form công thức

    // Khi nhấn nút "📜 Công thức"
    recipeBtn.addEventListener("click", function () {
        pageProductForm.style.display = "none"; // Ẩn form sản phẩm
        containerRecipe.style.display = "flex"; // Hiện công thức
    });

    // Khi nhấn nút đóng "✖"
    closeRecipeBtn.addEventListener("click", function () {
        containerRecipe.style.display = "none"; // Ẩn công thức
        pageProductForm.style.display = "block"; // Quay lại form sản phẩm
    });
});
