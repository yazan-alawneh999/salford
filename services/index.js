import api from './api';

import { createProfileService } from './profileService';

// export const authService = createAuthService(api, tokenService);
// export const courseService = createCourseService(api);
// export const categoryService = createCategoryService(api);
// export const planService = createPlanService(api);
export const profilesService = createProfileService(api);
