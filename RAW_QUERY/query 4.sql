SELECT 
  e.id AS employee_id,
  e.nik,
  e.name,
  e.is_active,
  ep.gender,
  CONCAT(EXTRACT(YEAR FROM AGE(CURRENT_DATE, ep.date_of_birth)), ' Years Old') AS age,
  ed.name AS school_name,
  ed.level,
   COALESCE(NULLIF(CONCAT_WS(' & ',
    CASE WHEN COUNT(CASE WHEN ef.relation_status = 'Istri' THEN 1 END) > 0 
         THEN CONCAT(COUNT(CASE WHEN ef.relation_status = 'Istri' THEN 1 END), ' Istri') END,
    CASE WHEN COUNT(CASE WHEN ef.relation_status = 'Suami' THEN 1 END) > 0 
         THEN CONCAT(COUNT(CASE WHEN ef.relation_status = 'Suami' THEN 1 END), ' Suami') END,
    CASE WHEN COUNT(CASE WHEN ef.relation_status = 'Anak' THEN 1 END) > 0 
         THEN CONCAT(COUNT(CASE WHEN ef.relation_status = 'Anak' THEN 1 END), ' Anak') END,
    CASE WHEN COUNT(CASE WHEN ef.relation_status = 'Anak Sambung' THEN 1 END) > 0 
         THEN CONCAT(COUNT(CASE WHEN ef.relation_status = 'Anak Sambung' THEN 1 END), ' Anak Sambung') END
  ), ''), '-') AS family_data
  
FROM employees e
LEFT JOIN employee_profiles ep ON e.id = ep.employee_id
LEFT JOIN educations ed ON e.id = ed.employee_id
LEFT JOIN employee_families ef ON e.id = ef.employee_id

GROUP BY 
  e.id, e.nik, e.name, e.is_active, ep.gender, ep.date_of_birth, ed.name, ed.level
ORDER BY e.id;