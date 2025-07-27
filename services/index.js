import api from './api';
import { tokenService } from './tokenService';
import { createAuthService } from './authService';
import { createCourseService } from './courseService';
import { createCategoryService } from './categoryService';
import { createPlanService } from './planService';

export const authService = createAuthService(api, tokenService);
export const courseService = createCourseService(api);
export const categoryService = createCategoryService(api);
export const planService = createPlanService(api);
