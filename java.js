import { createClient } from '@supabase/supabase-js'

// URL de Supabase
const supabaseUrl =
  'https://dwwoqguysdjlxhbgqwnq.supabase.co'

// API KEY
const supabaseKey =
  'sb_publishable_uzR0FtcxEWUf7YuSqfTM6Q_pWytNv1p'

// Conexión
const supabase =
  createClient(supabaseUrl, supabaseKey)

// Función para obtener datos
async function obtenerPersonas() {

  const { data, error } = await supabase
    .from('personas')
    .select('*')

  if (error) {

    console.log('Error:', error)

  } else {

    console.log('Datos:', data)
  }
}

// Ejecutar función
obtenerPersonas()