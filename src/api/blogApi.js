import { http } from './http.js';

// Fetch active blog categories for website frontend
export const getBlogCategoriesApi = async () => {
  return await http('/api/blog-category?status=active', {
    method: 'GET'
  });
};

// Fetch active blogs for website frontend (with category filter, search & pagination)
export const getBlogsApi = async (category = 'all', search = '', page = 1, limit = 9) => {
  const params = new URLSearchParams();
  params.append('status', 'active');
  if (category && category !== 'all') {
    params.append('category', category);
  }
  if (search && search.trim() !== '') {
    params.append('search', search.trim());
  }
  params.append('page', page);
  params.append('limit', limit);

  return await http(`/api/blog?${params.toString()}`, {
    method: 'GET'
  });
};

// Fetch single blog by ID
export const getBlogByIdApi = async (id) => {
  return await http(`/api/blog/${id}`, {
    method: 'GET'
  });
};
