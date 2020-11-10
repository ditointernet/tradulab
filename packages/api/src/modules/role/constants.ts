export const ROLES = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  CONTRIBUTOR: 'contributor',
=======
<<<<<<< HEAD
=======
=======
>>>>>>> remove comments
  CONTRIBUTOR: 'contributor',
  DEVELOPER: 'developer',
  MANAGER: 'manager',
  OWNER: 'owner',
<<<<<<< HEAD
  MANAGER: 'manager',
>>>>>>> Update Role
  DEVELOPER: 'developer',
  MANAGER: 'manager',
  OWNER: 'owner',
=======
>>>>>>> remove comments
  PROOFREADER: 'proofreader',
  // VIEWER: 'viewer',
};

<<<<<<< HEAD
<<<<<<< HEAD
export const ROLES_AVAILABLE_INVITE_USER = [ROLES.OWNER, ROLES.MANAGER];

// Array ordenado Hierarquicamente
=======
// Arrey ordenado Hierarquicamente
>>>>>>> remove comments
=======
// Array ordenado Hierarquicamente
>>>>>>> erase comments
export const ROLES_LIST = [
=======
  // VIEWER: 'viewer',
  CONTRIBUTOR: 'contributor',
  PROOFREADER: 'proofreader',
  DEVELOPER: 'developer',
  MANAGER: 'manager',
  OWNER: 'owner',
};

export const ROLES_LIST = [ // mudar nome
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  ROLES.OWNER,
  ROLES.MANAGER,
  ROLES.DEVELOPER,
  ROLES.PROOFREADER,
  ROLES.CONTRIBUTOR,
  // ROLES.VIEWER,
];

export const ERROR_CODES = {
  INVITED_EXISTING_ROLE: 'INVITED_EXISTING_ROLE',
  INVITED_NOT_AVAILABLE: 'INVITED_NOT_AVAILABLE',
  INVITED_NOT_EXISTING_ROLE: 'INVITED_NOT_EXISTING_ROLE',
  INVITED_SAME_OR_HIGHER_ROLE: 'INVITED_SAME_OR_HIGHER_ROLE',
  INVITED_YOURSELF: 'INVITED_YOURSELF',
  REMOVED_NOT_EXISTING_ROLE: 'REMOVED_NOT_EXISTING_ROLE',
  REMOVED_SAME_OR_HIGHER_ROLE: 'REMOVED_SAME_OR_HIGHER_ROLE',
  REMOVED_YOURSELF_AS_OWNER: 'REMOVED_YOURSELF_AS_OWNER',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE: 'UPDATED_FROM_SAME_OR_HIGHER_ROLE',
  UPDATED_NOT_EXISTING_ROLE: 'UPDATED_NOT_EXISTING_ROLE',
  UPDATED_TO_SAME_OR_HIGHER_ROLE: 'UPDATED_TO_SAME_OR_HIGHER_ROLE',
  UPDATED_YOURSELF: 'UPDATED_YOURSELF',
};

export const ERROR_MESSAGES = {
  INVITED_EXISTING_ROLE: 'The provided user is already part of the project.',
<<<<<<< HEAD
  INVITED_NOT_AVAILABLE: 'Only manager and owner can invite users to a project',
  INVITED_NOT_EXISTING_ROLE: "You don't have a role in this project",
  INVITED_SAME_OR_HIGHER_ROLE:
    'You cannot invite an user with the same or higher role.',
  INVITED_YOURSELF: 'You cannot invite yourself.',
  REMOVED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  REMOVED_SAME_OR_HIGHER_ROLE:
    'You can not remove someone with the same or higher role than your own.',
  REMOVED_YOURSELF_AS_OWNER:
    'You cannot remove your ownership from the project.',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE:
    'You can not update someone with the same or higher role than your own.',
  UPDATED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  UPDATED_TO_SAME_OR_HIGHER_ROLE:
    'You can not give the same or higher role than your own to an user.',
  UPDATED_YOURSELF: 'You cannot update your own role.',
=======
  INVITED_SAME_OR_HIGHER_ROLE:
    'You cannot invite an user with the same or higher role.',
  UPDATED_YOURSELF: 'You cannot update your own role.',
  UPDATED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  UPDATED_TO_SAME_OR_HIGHER_ROLE:
    'You can not give the same or higher role than your own to an user.',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE:
    'You can not update someone with the same or higher role than your own.',
  REMOVED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  REMOVED_YOURSELF_AS_OWNER:
    'You cannot remove your ownership from the project.',
  REMOVED_SAME_OR_HIGHER_ROLE:
    'You can not remove someone with the same or higher role than your own.',
>>>>>>> merge
};
