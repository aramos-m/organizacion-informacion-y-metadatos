from lxml import etree

def execute_xpath_queries(xml_file, queries):
    """
    Ejecuta las consultas XPath dadas en un archivo XML.

    Args:
        xml_file (str): Ruta del archivo XML.
        queries (dict): Diccionario con descripciones y consultas XPath.

    Returns:
        dict: Resultados de las consultas XPath.
    """
    tree = etree.parse(xml_file)
    root = tree.getroot()

    results = {}
    for description, xpath_query in queries.items():
        results[description] = root.xpath(xpath_query)  # Obtiene todos los elementos que coinciden con la consulta XPath

    return results

# Definición de las consultas extraídas del archivo TXT
xpath_queries = {
    "Usuarios": "//name",
    "Años de publicación": "//publication_date/year",
    "Códigos los libros": "//@code",
    "Usuarios penalizados": "//*[penalized='yes']/name",
    "Usuarios menores de 30": "//*[age<30]/name",
    "IDs de usuarios": "//@id",
    "Nombre usuario por ID": "//*[@id='63a98f369ac62a82b44566af']/name",
    "Libros prestados por ID": "//*[@code=//*[user='63a98f369ac62a82b44566ad']/book]/title",
    "Préstamos retrasados": "//prestamo[expiration_days < 0]",
    "Último préstamo": "//prestamo[last()]",
    "Edades de usuarios en Madrid": "//*[city='Madrid']/../age",
    "Libros no publicados en 2000": "//*[publication_date[year!=2000]]/title",
    "Libros con precio en dólares": "//*[details[price[@currency='usd']]]/title",
    "Libros prestados a usuario '63a98f369ac62a82b44566ad'": "//*[@code=//*[user='63a98f369ac62a82b44566ad']/book]/title",
    "Libros prestados a usuarios en Madrid": "//*[user=//*[city='Madrid']/../@id]/book",
    "Libros con precio en múltiples monedas": "//*[ \
        (price[@currency='usd'] and price[@currency!='usd']) or \
        (price[@currency='esp'] and price[@currency!='esp']) or \
        (price[@currency='gbp'] and price[@currency!='gbp']) \
    ]/../title"
}

# Ejecuta las consultas XPath en el archivo XML
xml_file_path = "library.xml"
resultados = execute_xpath_queries(xml_file_path, xpath_queries)

# Muestra los resultados
for descripcion, resultado in resultados.items():
    print("\n" + descripcion + ":\n")
    
    if not resultado:
        print("No se encontraron resultados.")
    else:
        for elem in resultado:
            # Verifica si el elemento es un nodo XML
            if type(elem) == etree._Element:
                print(etree.tostring(elem, encoding='unicode').strip())
            else:
                # Si el resultado es solo texto, mostrar directamente el texto
                print(elem.strip())