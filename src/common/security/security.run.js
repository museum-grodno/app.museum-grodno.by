//import angular from "angular";

SecurityRun.$inject = ['PermPermissionStore', 'PermRoleStore', 'SecurityService', '$sessionStorage'];

export default function SecurityRun(PermPermissionStore, PermRoleStore, SecurityService, $sessionStorage) {
	PermPermissionStore
		.definePermission('isAuthorized', function () {
			SecurityService.currentUser = $sessionStorage.get('currentUser');
			return SecurityService.currentUser !== null;
		});
	PermPermissionStore
		.definePermission('hasGroup', function () {
			return SecurityService.userGroup !== null;
		});


	PermRoleStore
		.defineRole('AUTH_HAS_GROUP', ['isAuthorized', 'hasGroup']);



 /* let items = [
		"View reports",
		"Maintain measured values and faults",
		"Create reports",
		"Maintain rust occurrence",
		"Finalize report",
		"Print report",
		"View vehicles",
		"Maintain vehicles",
		"View documents",
		"Maintain documents",
		"Maintain master data",
		"Maintain license data",
		"Maintain settings",
		"Analysis",
		"Analysis export",
		"Excel export",
		"Print reports list",
		"Maintain customers",
		"Maintain stations",
		"Maintain users",
		"View news",
		"Maintain news",
		"Use chat",
		"Maintain standard texts",
		"Maintain fault catalog",
		"Maintain station settings",
		"Appraiser assistant",
    "Access 57A Service",
    "Maintain help texts",
		"Revision - maintain employees",
		"Revision - maintain revisions",
		"Revision - maintain facilities",
		"Revision - maintain expertise station"
	];

	angular.forEach(items, function (item) {
		PermPermissionStore.definePermission(item, function () {
			return 'admin';
			})
	});*/
}
